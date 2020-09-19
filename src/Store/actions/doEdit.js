import * as html2canvas from 'html2canvas'
import { EDIT } from '../actionTypes';

export default function doEdit(card) {
    
    var node = document.getElementById('carder-' + card.id);
    console.info('the node was', node, card.id);

    const perform = () => {
        html2canvas(node, {
            allowTaint: true,
            useCORS: true,
            backgroundColor: "#fff",
            windowHeight: node.scrollHeight,
            windowWidth: node.scrollWidth,
        })
            .then(function (canvas) {
                var tempcanvas = document.createElement('canvas');
                tempcanvas.width = 465;
                tempcanvas.height = 524;
                var context = tempcanvas.getContext('2d');
                context.drawImage(canvas, 465, 40, 465, 524, 0, 0, 465, 524);
                document.body.append(canvas);
            })
            .catch(e => {
            console.info('caught the error as', e);
        })
    }

    perform();


    return (dispatch, getState) => {
        let { abilities } = card;
        abilities = abilities.join(',');
        card = { ...card, abilities };
        dispatch({ type: EDIT, payload: card });
    }
}