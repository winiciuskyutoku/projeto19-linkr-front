export default function transformeDate(date) {
    const originalTime = date.split("T")[1].split(":"); // Divide a string em partes separadas
    const hours = parseInt(originalTime[0]); // Converte a parte das horas em um número
    const newHours = (hours + 21 ) % 24; // Subtrai 3 e lida com valores negativos ou além de 24
    const formattedTime = `${newHours.toString().padStart(2, "0")}:${originalTime[1]}:${originalTime[2]}`; // Formata novamente como uma string de dois dígitos
    const newDate = `${date.split("T")[0]}T${formattedTime}`;
    return encodeURIComponent(newDate)
}