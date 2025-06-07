import { index, render } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";
import { Document } from "~/app/document";
import { setCommonHeaders } from "~/app/headers";
import { Home } from "~/app/pages/home";

export interface AppContext {}

const app = defineApp([setCommonHeaders(), render(Document, [index([Home])])]);

export default app;
