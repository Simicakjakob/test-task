import { Schema, model, connect,SaveOptions } from "mongoose";
import { iUporabnik } from "./uporabnik";
import { mongoose } from "@typegoose/typegoose";
class Uporabnik implements iUporabnik{
    ime: string;
    priimek: string;
    datum_rojstva: string;
    aktiven: boolean;
}

const uporabnikSchema = new mongoose.Schema<Uporabnik>({
    ime: {type: String, required: true},
    priimek: {type: String, required: true},
    datum_rojstva: {type: String, required: true},
    aktiven: {type: Boolean, required: true}
    
})
const uporabnikModel = mongoose.model('Uporabnik', uporabnikSchema);

async function mongo_run() {
    await connect('mongodb://127.0.0.1:27017/test-task');

}

async function ustvari_uporabnika(upo:Uporabnik){
    try{
        await connect('mongodb://127.0.0.1:27017/test-task');
        await uporabnikModel.create({
        ime:upo.ime.toString(),
        priimek:upo.priimek.toString(),
        datum_rojstva:upo.datum_rojstva.toString(),
        aktiven:upo.aktiven
        });
        console.log("Uspešno shranjeno");
    }
    catch(error){
        console.log(error.message);
    }
   
    


}

async function pridobi_uporabnika(id:string){
    try{ 
        await connect('mongodb://127.0.0.1:27017/test-task');
        const rezultat = await this.uporabnikModel.findById(id).exec()
        return rezultat;

    }catch(error)
    {
        console.log(error.message);
    }
   


}
/*Spremeni se to da bo updejtalo*/
async function posodobi_uporabnika(id:string,upo:Uporabnik){
    try{ 
        await connect('mongodb://127.0.0.1:27017/test-task');
        const rezultat = await this.uporabnikModel.findById(id).exec();
        return rezultat;

    }catch(error)
    {
        console.log(error.message);
    }
   


}