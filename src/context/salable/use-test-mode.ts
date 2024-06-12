import {useContext} from "react";
import {TestModeContext} from "./test-mode-context";

export const useTestMode = () => useContext(TestModeContext);
