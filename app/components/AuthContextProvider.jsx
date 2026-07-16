'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  signInAnonymously,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(null);

// Define context, manage user state, and provide auth methods
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes (login, logout, register)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = (e, p) => createUserWithEmailAndPassword(auth, e, p);
  const login = (e, p) => signInWithEmailAndPassword(auth, e, p);
  const guestLogin = () => signInAnonymously(auth);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, register, guestLogin, logout, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);