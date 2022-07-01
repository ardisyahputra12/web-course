// ====================================== scroll ke atas ======================================

window.onscroll = function() {
	scroll()
};

const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", toTop);

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowUp.style.display = "block";
    } else {
        arrowUp.style.display = "none";
    }
}
 
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// ======================================= bar navigasi =======================================

const nav = document.querySelector("#nav");
const navBar = document.querySelector("#nav-bar");
const navClose = document.querySelector("#nav-close");
navBar.addEventListener("click", navOn);
navClose.addEventListener("click", navOff);

function navOn() {
	nav.style.display = "block";
	navBar.style.display ="none";
	navClose.style.display = "block";
}

function navOff() {
	navBar.style.display ="block";
	nav.style.display = "none";
	navClose.style.display = "none";
}

// ======================================== formSubmit ========================================

const formHubungi = document.querySelector("#formHubungi");
formHubungi.addEventListener("submit", function() {
    alert("Terima kasih. Pesan Anda sudah kami terima")
});

// ========================================== daftar ==========================================

const daftar = document.querySelector("#daftar");
daftar.addEventListener("click", pendaftaran);

function pendaftaran() {
	alert("Untuk mendaftar kelas, silahkan Anda isikan form berikut!");
	const nama = prompt("Isi Nama Anda");
	const alamat = prompt("Isi Alamat Anda");
	const email = prompt("Isi Email Anda");
	const WA = prompt("Isi Nomor WA Anda");
	alert("Terima kasih " + nama + " telah mendaftar. Kami akan mengirimkan pesan konfirmasi pendaftaran kepada Anda melalui email dengan tujuan " + email);
}