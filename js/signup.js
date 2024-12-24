document.addEventListener("DOMContentLoaded", ()=>{
    signUpButton.addEventListener("click",async ()=>{
        const result = await signUp(
            username.value,
            fullName.value,
            password.value
        );
        if("Conflict" === result){
            output.innerText = "Username already taken.";
            return;
        }
        //SUCCESS
        window.location.href = "index.html";
    });//end click
}); //end loaded

{/* <script>
function redirectToProfile(event) {
    event.preventDefault(); // Prevent the default form submission
    // Assuming a successful signup request here
    alert("Account created successfully! Redirecting to your profile...");
    window.location.href = "profile.html"; // Redirect to the profile page
}
</script> */}