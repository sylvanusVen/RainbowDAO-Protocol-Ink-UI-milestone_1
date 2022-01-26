import {eventBus} from "./eventBus";

const formatResult =  (result) =>{
    let str;
    if (result && result.output) {
        str = result.output.toHuman();
    }
    return str;
}
const dealResult = (result,msg)=>{
    if (result.status.isFinalized || result.status.isInBlock) {
        result.events
            .filter(({ event: { section } }) => section === 'system')
            .forEach(({ event: { data, method } }) => {
                if (method === 'ExtrinsicFailed') {
                    const [dispatchError] = data
                    if (dispatchError.isModule) {
                        try {
                            const mod = dispatchError.asModule;
                            const error = data.registry.findMetaError(new Uint8Array([mod.index.toNumber(), mod.error.toNumber()]));
                            console.log("error:", error.name);
                            eventBus.$emit('message', {
                                type: "error",
                                message: error.name
                            })

                        } catch (error) {
                            console.log(error);
                        }
                    }
                } else if (method === 'ExtrinsicSuccess') {
                    console.log('success');
                    let message = msg?msg + " Success":""
                    eventBus.$emit('message', {
                        type: "success",
                        message
                    })
                }
            });
    } else if (result.isError) {
        console.log('fail2,', result.toHuman());
    }
}
const dealBlockNumber =  (blockNumber) =>{

    return blockNumber;
}

const dateFormat = (dateTime) => {
    const t = new Date(dateTime);
    const format = 'Y-m-d h:i:s';
    const year = t.getFullYear();
    const month = t.getMonth() + 1;
    const day = t.getDate();
    const hours = t.getHours();
    const minutes = t.getMinutes();
    const seconds = t.getSeconds();
    const hash = {
        'Y': year,
        'm': month>=10?month:`0${month}`,
        'd': day>=10?day:`0${day}`,
        'h': hours>=10?hours:`0${hours}`,
        'i': minutes>=10?minutes:`0${minutes}`,
        's': seconds>=10?seconds:`0${seconds}`
    };
    return format.replace(/\w/g, o => {
        return hash[o]
    })
}

const formatvoteDateTime = (dateTime,endTime) =>{
    dateTime = parseInt(dateTime.replace(/,/g, ""));
    endTime = parseInt(endTime.replace(/,/g, ""));

    return dateFormat(dateTime + endTime)
}
export {
    formatResult,
    formatvoteDateTime,
    dateFormat,
    dealResult
}
