export const Downloader = {
	Text: async (url) => {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Descarga fallida - ${res.statusText}`);
			return await res.text();
		} catch (error) {
			throw new Error(`Error al obtener el csv - ${error.message}`);
		}
	},
};
