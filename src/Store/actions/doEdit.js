//import html2canvas from 'html2canvas'
import { EDIT } from '../actionTypes';

export default function doEdit(card) {
    
    //var node = document.getElementById('carder-' + card.id);
    //console.info('the node was', node, card.id);
    //html2canvas(node, {
    //    allowTaint: true,
    //    imageTimeout: 3000,
    //    useCORS: true,
    //}).then(canvas => {
    //    document.body.append(canvas);
    //    console.log('done')
    //}).catch(e => {
    //    console.info('caught the error as', e);
    //})

    return (dispatch, getState) => {
        let { abilities } = card;
        abilities = abilities.join(',');
        card = { ...card, abilities };
        dispatch({ type: EDIT, payload: card });
    }
}