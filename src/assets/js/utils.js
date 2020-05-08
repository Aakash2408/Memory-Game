/**
 * Change the seconds to ##:## format
 * @param {number} seconds 
 * @return {string} formattedTime
 */
function formatTime(seconds) {
    let minutesTxt, secondsTxt;

    minutesTxt = Math.floor(seconds/60);
    if(minutesTxt > 99) return '99:99';
    secondsTxt = seconds % 60;

    minutesTxt = minutesTxt < 10 ? '0' + minutesTxt : minutesTxt.toString();
    secondsTxt = secondsTxt < 10 ? '0' + secondsTxt : secondsTxt.toString();

    return minutesTxt + ':' + secondsTxt;
}

export default {
    formatTime
}