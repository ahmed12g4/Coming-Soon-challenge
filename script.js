const emailInput = document.getElementById("email");
const errorDiv = document.getElementById("error");
const submitBtn = document.getElementById("submit");

// دالة التحقق من صحة الإيميل
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  emailInput.classList.remove("error-border");
  errorDiv.textContent = "";

  if (emailValue === "") {
    
    emailInput.classList.add("error-border");
    errorDiv.textContent =
      "⚠️ Whoops! It looks like you forgot to add your email";
  } else if (!isValidEmail(emailValue)) {
    
    emailInput.classList.add("error-border");
    errorDiv.textContent = "⚠️ Please provide a valid email address";
  } else {
   
    errorDiv.textContent = "";
    emailInput.value = "";
    // alert("✅ Email is valid!");
  }
});
