// toggle and responsive navigagtion
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let phoneNumber = "6285795715960"; // Ganti dengan nomor WhatsApp yang sesuai

  if (name === "") {
    return alert("Masukkan nama Anda.");
  } else if (email === "") {
    return alert("Masukkan alamat email Anda.");
  } else if (message === "") {
    return alert("Masukkan pesan Anda.");
  }

  // Buat tautan WhatsApp Click to Chat dengan pesan yang diisi
  var whatsappLink =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(
      "Nama: " + name + "\nEmail: " + email + "\nPesan: " + message
    );

  // Buka aplikasi WhatsApp dengan tautan ini
  window.location.href = whatsappLink;
}

// Panggil fungsi ini ketika Anda ingin mengirim pesan WhatsApp
getData();

// supaya riset otomatis
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
