const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Triggers when a user is created to ensure their Firestore user document exists
 * This provides redundancy to make sure user data is properly saved
 */
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
  try {
    // Check if user document already exists in Firestore
    const userDoc = await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get();

    // If document doesn't exist, create a minimal one with default role
    if (!userDoc.exists) {
      console.log(`Creating Firestore user document for ${user.uid}`);

      await admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          email: user.email,
          name: user.displayName || "User",
          role: "learner", // Default role
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          uid: user.uid,
        });

      console.log(`User document created successfully for ${user.uid}`);
    } else {
      console.log(`User document already exists for ${user.uid}`);
    }

    return null;
  } catch (error) {
    console.error("Error creating user document:", error);
    return null;
  }
});

/**
 * Cleans up user data when a user is deleted
 */
exports.onUserDelete = functions.auth.user().onDelete(async (user) => {
  try {
    console.log(`Deleting Firestore user document for ${user.uid}`);
    await admin.firestore().collection("users").doc(user.uid).delete();
    console.log(`User document deleted successfully for ${user.uid}`);
    return null;
  } catch (error) {
    console.error("Error deleting user document:", error);
    return null;
  }
});
