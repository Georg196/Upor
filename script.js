document.addEventListener('DOMContentLoaded', async function () {
	document.getElementById('burgerMenu').addEventListener('click', function () {
		document.querySelector('.container__menu').classList.toggle('open')
	})
    socialBar()
})


function socialBar() {
    const socialContent = document.querySelector('.net')
    let content = `<div class="social"><a href="https://vk.com/georg.rccx"><img src="../../assets/images/V_copy.svg" alt="VK"/></a><a href="https://t.me/Georg196"><img src="../../assets/images/T_copy.svg" alt="TG"/></a><a href="//wa.me/+79507448857"><img src="../../assets/images/W_copy.svg" alt="WT"/></a></div>`
    socialContent.innerHTML = content
}

// <div class="container__menu">
// 			<div class="burger__menu-btn" id="burgerMenu">
// 				<div class="burger__menu"><span></span><span></span><span></span></div>
// 			</div>
// 			<div class="menu">
// 				<div>
// 					<a href="../../index.html"
// 						><img
// 							class="face"
// 							src="../../assets/images/Remove-bg.ai_1700557175860.png"
// 							alt="my face"
// 					/></a>
// 				</div>
// 				<a href="../../index.html" class="main">Главная</a>
// 				<a href="../../source/pages/index_design.html">Навыки</a>
// 				<a href="../../source/pages/index_project.html">Проекты</a>
// 				<a href="../../source/pages/index_cont.html">Контакты</a>
// 				<a href="../../source/pages/index_about.html" class="active">P.S.</a>
// 				<p>Создано в 2023 г.</p>
// 			</div>
// 		</div>