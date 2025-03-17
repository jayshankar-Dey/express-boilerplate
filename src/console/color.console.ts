class log{
      red=(text:any)=>{
       console.log(`\x1b[1m\x1b[41m ${text} \x1b[0m`);
      }
      
      blue=(text:any)=>{
       console.log(`\x1b[1m\x1b[44m ${text} \x1b[0m`);
      }

      green=(text:any)=>{
       console.log(`\x1b[1m\x1b[42m ${text} \x1b[0m`);
      }

      magenta=(text:any)=>{
       console.log(`\x1b[45m ${text} \x1b[0m`);
      }
}

const Log=new log()

export default Log