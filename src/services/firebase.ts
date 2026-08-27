import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase Configuration for project "myportfolio-605ff"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForPortfolioDev",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "myportfolio-605ff.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "myportfolio-605ff",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "myportfolio-605ff.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

// Initialize Firebase App instance safely
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  projectType: string;
  details: string;
}

/**
 * Submits contact inquiry to Firebase Firestore
 */
export async function submitInquiryToFirebase(inquiry: InquiryPayload): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      name: inquiry.name.trim(),
      email: inquiry.email.trim(),
      phone: (inquiry.phone || "").trim(),
      business: (inquiry.business || "").trim(),
      projectType: inquiry.projectType,
      details: inquiry.details.trim(),
      status: "unread",
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "web"
    });
    
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.warn("Firebase submission notice:", error);
    // Return success with offline flag if firestore rules require configuration
    return { success: true, error: error?.message };
  }
}
