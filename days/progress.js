const key="toeic-reading-day01-part5";const status=document.querySelector("#day1-status");if(status){try{const score=localStorage.getItem(key);if(score!==null)status.textContent="已交卷 · "+score+" / 30";}catch(e){status.textContent="本機儲存無法使用";}}const form=document.querySelector("form");if(form){form.addEventListener("submit",()=>{const score=[...document.querySelectorAll("article.question")].filter(q=>q.querySelector("input:checked")?.value===q.dataset.answer).length;try{localStorage.setItem(key,String(score));}catch(e){const message=document.createElement("p");message.textContent="此瀏覽器無法儲存進度，本次分數仍可查看。";form.appendChild(message);}});}
const part6status=document.querySelector("#day1-part6-status");if(part6status){try{const score=localStorage.getItem("toeic-reading-day01-part6");if(score!==null)part6status.textContent="Part 6 已交卷 · "+score+" / 16";}catch(e){part6status.textContent="本機儲存無法使用";}}

const part7status=document.querySelector("#day1-part7-status");if(part7status){try{const score=localStorage.getItem("toeic-reading-day01-part7");if(score!==null)part7status.textContent="Part 7 已交卷 · "+score+" / 54";}catch(e){part7status.textContent="本機儲存無法使用";}}

const day2status=document.querySelector("#day2-status");if(day2status){try{const score=localStorage.getItem("toeic-reading-day02-part5");if(score!==null)day2status.textContent="Part 5 已交卷 · "+score+" / 30";}catch(e){day2status.textContent="本機儲存無法使用";}}

const day2p6=document.querySelector("#day2-part6-status");if(day2p6){try{const score=localStorage.getItem("toeic-reading-day02-part6");if(score!==null)day2p6.textContent="Part 6 已交卷 · "+score+" / 16";}catch(e){day2p6.textContent="本機儲存無法使用";}}

const day2p7=document.querySelector("#day2-part7-status");if(day2p7){try{const score=localStorage.getItem("toeic-reading-day02-part7");if(score!==null)day2p7.textContent="Part 7 已交卷 · "+score+" / 54";}catch(e){day2p7.textContent="本機儲存無法使用";}}

const day3status=document.querySelector("#day3-status");if(day3status){try{const score=localStorage.getItem("toeic-reading-day03-part5");if(score!==null)day3status.textContent="Part 5 已交卷 · "+score+" / 30";}catch(e){day3status.textContent="本機儲存無法使用";}}

const day3p6=document.querySelector("#day3-part6-status");if(day3p6){try{const score=localStorage.getItem("toeic-reading-day03-part6");if(score!==null)day3p6.textContent="Part 6 已交卷 · "+score+" / 16";}catch(e){day3p6.textContent="本機儲存無法使用";}}

const day3p7=document.querySelector("#day3-part7-status");if(day3p7){try{const score=localStorage.getItem("toeic-reading-day03-part7");if(score!==null)day3p7.textContent="Part 7 已交卷 · "+score+" / 54";}catch(e){day3p7.textContent="本機儲存無法使用";}}

const day4status=document.querySelector("#day4-status");if(day4status){try{const score=localStorage.getItem("toeic-reading-day04-part5");if(score!==null)day4status.textContent="Part 5 已交卷 · "+score+" / 30";}catch(e){day4status.textContent="本機儲存無法使用";}}

const day4p6=document.querySelector("#day4-part6-status");if(day4p6){try{const score=localStorage.getItem("toeic-reading-day04-part6");if(score!==null)day4p6.textContent="Part 6 已交卷 · "+score+" / 16";}catch(e){day4p6.textContent="本機儲存無法使用";}}

const day5status=document.querySelector("#day5-status");if(day5status){try{const score=localStorage.getItem("toeic-reading-day05-part5");if(score!==null)day5status.textContent="Part 5 已交卷 · "+score+" / 30";}catch(e){day5status.textContent="本機儲存無法使用";}}

const day5p6=document.querySelector("#day5-part6-status");if(day5p6){try{const score=localStorage.getItem("toeic-reading-day05-part6");if(score!==null)day5p6.textContent="Part 6 已交卷 · "+score+" / 16";}catch(e){day5p6.textContent="本機儲存無法使用";}}

const day4p7=document.querySelector("#day4-part7-status");if(day4p7){try{const score=localStorage.getItem("toeic-reading-day04-part7");if(score!==null)day4p7.textContent="Part 7 已交卷 · "+score+" / 54";}catch(e){day4p7.textContent="本機儲存無法使用";}}

const day5p7=document.querySelector("#day5-part7-status");if(day5p7){try{const score=localStorage.getItem("toeic-reading-day05-part7");if(score!==null)day5p7.textContent="Part 7 已交卷 · "+score+" / 54";}catch(e){day5p7.textContent="本機儲存無法使用";}}
