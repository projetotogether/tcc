let rec1 = document.getElementById('rectangle1');
let rec2 = document.getElementById('rectangle2');
let rec3 = document.getElementById('rectangle3');

document.getElementById('arquivo1').addEventListener('change', function() {
    borderShow1();
});

document.getElementById('arquivo2').addEventListener('change', function() {
    borderShow2();
});

document.getElementById('arquivo3').addEventListener('change', function() {
    borderShow3();
});

function borderShow1() {
    rec1.innerHTML = '<span class="material-symbols-outlined">cloud_done</span><p>Foto adicionada com sucesso!</p>';
    rec1.style.borderColor = "#2cbb0f";
}

function borderShow2() {
    rec2.innerHTML = '<span class="material-symbols-outlined">cloud_done</span><p>Foto adicionada com sucesso!</p>';
    rec2.style.borderColor = "#2cbb0f";
}

function borderShow3() {
    rec3.innerHTML = '<span class="material-symbols-outlined">cloud_done</span><p>Foto adicionada com sucesso!</p>';
    rec3.style.borderColor = "#2cbb0f";
}
