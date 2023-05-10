const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const contactbutton = document.querySelector(".contact-me");

const handleButtonClick = (e) => {
	const targetSection = e.target.getAttribute("data-section");
	const section = document.querySelector(targetSection);
	targetSection !== "#about"
		? card.classList.add("is-active")
		: card.classList.remove("is-active");
	card.setAttribute("data-state", targetSection);
	sections.forEach((s) => s.classList.remove("is-active"));
	buttons.forEach((b) => b.classList.remove("is-active"));
	e.target.classList.add("is-active");
	section.classList.add("is-active");
};

buttons.forEach((btn) => {
	btn.addEventListener("click", handleButtonClick);
});

const downloadVcf = (e) => {
	const vcf = `BEGIN:VCARD
VERSION:4.0
N:Shah;Jainam;
FN:Jainam Shah
ORG:BD Technologies
TITLE: Software Engineer
GENDER:M
TEL;TYPE=CELL,VOICE:+919099981021
EMAIL;TYPE=work,INTERNET:sjainam74@gmail.com
URL:${window.location.host}
NOTE:This vCard was saved from the ${window.location.host}.
END:VCARD`;

	const blob = new Blob([vcf], { type: "text/vcard" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "j.vcf";
	// Append to html link element page
	document.body.appendChild(link);

	// Start download
	link.click();

	// Clean up and remove the link
	link?.parentNode?.removeChild(link);
};

contactbutton.addEventListener("click", downloadVcf);
