export const INDUSTRY = "industry";
export const ACADEMIA = "academia";
// ----------------NAMES END

export const INDUSTRY_PATH = "/" + INDUSTRY;
export const ACADEMIA_PATH = "/" + ACADEMIA;
export const LOGIN_MAIN = "/login";
export const SIGNUP_MAIN = "/signup";

const PROFILE = "/profile";
const PROJECTS = "/projects";
const RESETPASS = "/resetpassword";
// ---------------NAME PATH END

// ---------------ROUTES START

// -----------------ROUTES => AUTH START
export const INDUSTRY_LOGIN = LOGIN_MAIN + INDUSTRY_PATH;
export const INDUSTRY_SIGNUP = SIGNUP_MAIN + INDUSTRY_PATH;
export const ACADEMIA_LOGIN = LOGIN_MAIN + ACADEMIA_PATH;
export const ACADEMIA_SIGNUP = SIGNUP_MAIN + ACADEMIA_PATH;
export const ACADEMIA_RESETPASS = RESETPASS + ACADEMIA_PATH;
export const INDUSTRY_RESETPASS = RESETPASS + INDUSTRY_PATH;
// -----------------ROUTES => AUTH END

// -----------------PROFILE START
export const ACADEMIA_PROFILE = ACADEMIA_PATH + PROFILE;
export const INDUSTRY_PROFILE = ACADEMIA_PATH + PROFILE;
// -----------------PROFILE END

// -----------------PROJECTS START
export const INDUSTRY_PROJECTS = INDUSTRY_PATH + PROJECTS;
export const ACADEMIA_PROJECTS = ACADEMIA_PATH + PROJECTS;
// -----------------PROJECTS END

// -----------------ROUTES END
