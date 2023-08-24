import { Router } from "./router.js";

const links = document.querySelector('a')

const router = new Router()




router.add('/','/pages/home.html')
router.add('/universo','/pages/universo.html')
router.add('/exploracao','/pages/exploracao.html')







window.onpopstate = () => router.handle()
window.route = () => router.route()
