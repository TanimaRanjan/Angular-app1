export class LoggingService 
    {
        logStatusChange(status:string) {
        console.log('The server status changed and the new status : ' + status);
    }
}