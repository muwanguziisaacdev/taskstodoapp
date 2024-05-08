const APIREQUEST = 
async (url ='', optionsObj = null, errMessage = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error ('Please reload the application');
        
    }
    catch(err) {
        errMessage = err.message;
    }
    finally {
        return errMessage;

    }
}
export default APIREQUEST;