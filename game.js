let shot=false,milk=false;
const menu=document.getElementById('menu');
const game=document.getElementById('game');
const s=document.getElementById('status');
document.getElementById('play').onclick=()=>{menu.classList.add('hidden');game.classList.remove('hidden');};
document.getElementById('espresso').onclick=()=>{shot=true;s.textContent='☕ Espresso listo';};
document.getElementById('milk').onclick=()=>{milk=true;s.textContent='🥛 Leche vaporizada';};
document.getElementById('serve').onclick=()=>{
 if(shot&&milk){s.innerHTML='✅ ¡Latte perfecto! ⭐ +10 💰 Propina $25 MXN';}
 else{s.textContent='❌ Falta preparar todos los ingredientes.';}
};