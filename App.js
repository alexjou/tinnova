import { StatusBar, LogBox } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import { initializeFirebase } from "./src/firebase/firebase";
import Route from "./src/routes/route";

LogBox.ignoreAllLogs();

export default function App() {
  initializeFirebase();
  LogBox.ignoreAllLogs()
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" />
      <Route />
    </AuthProvider>
  );
}
