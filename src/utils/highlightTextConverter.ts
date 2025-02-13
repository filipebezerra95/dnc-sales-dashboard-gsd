/** 
* convert text from highlight api
* @param text - text to be converted
* @returns  converted text
*/
export function highlightTextConverter(text: string): string {
    switch (text) {
        case 'alert' :
            return '* a meta esta longe de ser batida'
        case 'success' :
            return '* A meta do mes foi batida ! parabens!'
        case 'warning' :
            return '* falta pouco vamos la!'
        default:
            return '* sem dados no momento !'
    }
}