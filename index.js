const { text, query } = require("express")
const telegramBot = require("node-telegram-bot-api")
const env = require("dotenv").config()
const token = "7158104408:AAGCJ3dBNHkws7qM05QoLSB6RIUCHUjG5vY"
const Bot = new telegramBot(token,{polling:true})
const db = require("./config/db.js")
Bot.onText(/\/start/,(msg)=>{
let massage = "به ربات کافه فرست کلاس منصور خوش آمدین "
const chadId = msg.chat.id
      const keybord = {
        reply_markup:{
          inline_keyboard:[
            [
              {text:"منوغذاها📃",callback_data:"food_meno"}
            ],[
              {text:"کیف پول💰",callback_data:"kif"}
            ]
            
          ]
        }
      }

Bot.sendMessage(chadId,massage,keybord)
})

Bot.on("callback_query",(query)=>{
  chatid = query.message.chat.id
  const command = query.data

  if(command == "food_meno"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"🍖پروتینی ها",callback_data:"protoin"}
        ],[
          {text:"🍟کربوهیدراتی ها",callback_data:"karbohidrat"}
        ]
      ]
      }
    }
    

    // meno(chatid)
    Bot.sendMessage(chatid,"لطفا غذای خودتون رو انتخاب کنین",keybord)
  }
  if(command == "protoin"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"فیله ها🍗",callback_data:"file"}
        ],[
          {text:"عدسی🍛",callback_data:"adasi"}
        ],[
          {text:"خوراک لوبیا🍲",callback_data:"lobia"}
        ]
      ]
      }
    }

    Bot.sendMessage(chatid,"لطفا طعم فیله خودتون رو انتخاب کنین",keybord)
    
  }
  if(command == "file"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"ترش🍋‍🟩",callback_data:"file_torsh"}
        ],[
          {text:"تند🌶️",callback_data:"file_tond"}
        ]
      ]
      }
    }
    

    Bot.sendMessage(chatid,"لطفا دسته غذایی خودتون رو انتخاب کنین",keybord)
    
  }  if(command == "file_torsh"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"200گرم",callback_data:"200"}
        ],[
          {text:"250گرم",callback_data:"250"}
        ]
      ]
      }
    }

    Bot.sendMessage(chatid,"لطفا وزن فیله خودتون رو انتاب کنین",keybord)
    
  }if(command == "file_tond"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"200گرم",callback_data:"200"}
        ],[
          {text:"250گرم",callback_data:"250"}
        ]
      ]
      }
    }

    Bot.sendMessage(chatid,"لطفا وزن فیله خودتون رو انتاب کنین",keybord)
    
  }if(command == "200" || command == "250"){
    const keybord = {
      reply_markup :{
        inline_keyboard:[[
          {text:"آبدار",callback_data:"abdar"}
        ],[
          {text:"برشته",callback_data:"barashta"}
      ]]
      }
    }
    let qeuery = `INSERT INTO test (chatid,text) VALUES (${chatid} , ${command})`
    db.query(qeuery,(err,result)=>{
      if(err){
        console.log(err);
        
      }else{
        console.log(result);
        console.log("qeuery add");
        
      }
    })
    Bot.sendMessage(chatid,"لطفا نوع پخت رو مشخص کنین",keybord)
    
  }
})


const meno = (msg)=>{
  let massage = "به ربات کافه فرست کلاس منصور خوش آمدین "
const chadId = msg.chat.id
      const keybord = {
        reply_markup:{
          inline_keyboard:[
            [
              {text:"منوغذاها📃",callback_data:"food_meno"}
            ],[
              {text:"کیف پول💰",callback_data:"kif"}
            ]
            
          ]
        }
      }

Bot.sendMessage(chadId,massage,keybord)
}