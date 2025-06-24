document.addEventListener("DOMContentLoaded", function() {

    const luasForm = document.getElementById("luas-form");
    const alasInput = document.getElementById("alas");
    const tinggiInput = document.getElementById("tinggi");
    const luasResult = document.getElementById("luas-result");
    const resetLuasButton = document.getElementById("reset-luas");

    luasForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const alas = parseFloat(alasInput.value);
        const tinggi = parseFloat(tinggiInput.value);

        if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            luasResult.textContent = "Mohon masukkan nilai alas dan tinggi yang valid (angka positif).";
            return;
        }

        const luas = 0.5 * alas * tinggi;

         luasResult.innerHTML = 
            `L = 1/2 x a x t <br>` +
            `L = 1/2 x ${alas} x ${tinggi} <br>` +
            `L = ${luas}`;
    });

    resetLuasButton.addEventListener("click", function() {
        luasResult.innerHTML = "";
    });

    const kelilingForm = document.getElementById("keliling-form");
    const sisi1Input = document.getElementById("sisi1");
    const sisi2Input = document.getElementById("sisi2");
    const sisi3Input = document.getElementById("sisi3");
    const kelilingResult = document.getElementById("keliling-result");
    const resetKelilingButton = document.getElementById("reset-keliling");

    kelilingForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const s1 = parseFloat(sisi1Input.value);
        const s2 = parseFloat(sisi2Input.value);
        const s3 = parseFloat(sisi3Input.value);

        if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
            kelilingResult.textContent = "Mohon masukkan nilai semua sisi yang valid (angka positif).";
            return;
        }

        const keliling = s1 + s2 + s3;

        kelilingResult.innerHTML = 
            `K = S1 + S2 + S3 <br>` +
            `K = ${s1} + ${s2} + ${s3} <br>` +
            `K = ${keliling}`;
    });

    resetKelilingButton.addEventListener("click", function() {
        kelilingResult.innerHTML = "";
    });
});