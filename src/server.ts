/*
After converting this project to typescript 'npm run dev' started failing, fix can be found here: https://github.com/sveltejs/sapper/issues/1783
*/
import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import express from "express";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

express()
	.use(
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		sapper.middleware()
	)
	.listen(PORT, () => {
	});