import { createContext } from "react";

const Context = createContext([0, () => {}]);
const URL = createContext("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth")

export default Context;