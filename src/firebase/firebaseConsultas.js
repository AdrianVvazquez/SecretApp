import { db } from './firebaseConfig'
import { collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { get_Fecha } from './firebaseUtils';

const confessionsRef = collection(db, "confesiones");
const usuariosRef = collection(db, "usuarios");

const get_userId = async(name) => {
	const q = query(usuariosRef, where("nombre", "==", name));
	const user = await getDocs(q);
	return {id: user.docs[0].id, name: user.docs[0].data().nombre};
}

export const SaveNew = async(texto, tags) => {
	try {
		const { id } = await get_userId("Anónimo");
		const { fecha, hora } = get_Fecha();
		await setDoc(doc(confessionsRef), {
			id: id,
			fecha: fecha,
			hora: hora,
			tags:[tags],
			texto:texto
		});
		
		
	} catch (e){
		console.error(e);
	}

};

export const getConfessions = async() => {
	const { id, name } = await get_userId("Anónimo");
	const q = query(confessionsRef, where("id", "==", id));
	const datos = await getDocs(q);
	const datosTodos = [];

	datos.forEach( (doc) => {
		const { texto, tags, fecha, hora } = doc.data();
		// console.log(`Nombre: ${name}, ${texto}, ${tags}`);
		datosTodos.push({id: id, fecha: fecha, hora: hora, nombre: name, texto: texto, tags: tags})
	})
	
	return datosTodos;
}
