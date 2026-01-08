// --- LOGIKA DARK MODE ---
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  function updateDisplay() {
    if (htmlElement.classList.contains("dark")) {
      themeIcon.innerText = "☀️";
    } else {
      themeIcon.innerText = "🌙";
    }
  }

  updateDisplay();

  toggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    updateDisplay();
  });
});

// --- LOGIKA KALKULATOR ---

function generateMatrix() {
  const rows = parseInt(document.getElementById("rows").value) || 0;
  const cols = parseInt(document.getElementById("cols").value) || 0;
  const container = document.getElementById("matrix-input-grid");

  if (rows <= 0 || cols <= 0) return;

  container.style.gridTemplateColumns = `repeat(${cols}, minmax(70px, 100px))`;
  container.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `0`;
      input.className = `w-full p-3 border-2 border-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl text-center font-bold text-slate-700 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 dark:focus:ring-indigo-900 transition-all mat-input row-${i} col-${j}`;
      container.appendChild(input);
    }
  }
  document.getElementById("steps-output").innerHTML = "";
}

function getMatrixData() {
  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      const input = document.querySelector(`.row-${i}.col-${j}`);
      row.push(parseFloat(input.value) || 0);
    }
    matrix.push(row);
  }
  return matrix;
}

function solve() {
  let matrix = getMatrixData();
  const output = document.getElementById("steps-output");
  output.innerHTML =
    '<h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2"><span class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">#</span> Langkah Penyelesaian</h2>';

  const rows = matrix.length;
  const cols = matrix[0].length;

  addStep(matrix, "Matriks Input", "Matriks awal sebelum diproses.");

  for (let i = 0; i < Math.min(rows, cols); i++) {
    let maxRow = i;
    for (let k = i + 1; k < rows; k++) {
      if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) maxRow = k;
    }

    if (maxRow !== i) {
      [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
      addStep(
        matrix,
        `Tukar Baris ${i + 1} ↔ ${maxRow + 1}`,
        "Pivoting untuk akurasi."
      );
    }

    let pivotVal = matrix[i][i];
    if (Math.abs(pivotVal) > 1e-10) {
      for (let j = i; j < cols; j++) matrix[i][j] /= pivotVal;
      addStep(
        matrix,
        `Normalisasi Baris ${i + 1}`,
        `B${i + 1} dibuat pivot 1.`
      );
    } else continue;

    for (let k = 0; k < rows; k++) {
      if (k !== i) {
        let factor = matrix[k][i];
        if (Math.abs(factor) > 1e-10) {
          for (let j = i; j < cols; j++) matrix[k][j] -= factor * matrix[i][j];
          addStep(
            matrix,
            `Eliminasi Baris ${k + 1}`,
            `Membersihkan kolom ${i + 1}.`
          );
        }
      }
    }
  }
}

function addStep(matrix, title, description) {
  const container = document.getElementById("steps-output");
  const cols = matrix[0].length;
  let tableHtml = `
        <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 step-card mb-6">
            <h3 class="text-lg font-bold text-indigo-700 dark:text-indigo-400">${title}</h3>
            <p class="text-slate-500 dark:text-slate-400 mb-4 text-sm font-medium">${description}</p>
            <div class="overflow-x-auto py-2">
                <div class="inline-grid gap-2" style="grid-template-columns: repeat(${cols}, minmax(80px, 1fr))">`;

  matrix.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      const isPivot = rIdx === cIdx && Math.abs(cell - 1) < 1e-10;
      const bgClass = isPivot
        ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-300"
        : "bg-slate-50 border-slate-100 text-slate-600 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200";
      tableHtml += `<div class="p-3 border-2 rounded-xl text-center font-mono text-sm font-bold ${bgClass}">${
        Number.isInteger(cell) ? cell : cell.toFixed(2)
      }</div>`;
    });
  });

  tableHtml += `</div></div></div>`;
  container.innerHTML += tableHtml;
}

window.onload = generateMatrix;
