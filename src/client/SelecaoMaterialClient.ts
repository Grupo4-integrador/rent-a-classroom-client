/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';
import { SelecaoMaterial } from '~model/SelecaoMaterialModel';
class SelecaoMaterialClient {
	public async findById(id: number): Promise<SelecaoMaterial> {
		try {
			return (await apiFetch.get<SelecaoMaterial>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<SelecaoMaterial[]> {
		try {
			return (await apiFetch.get<SelecaoMaterial[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(selecaoMaterial: SelecaoMaterial): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, selecaoMaterial)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, selecaoMaterial: SelecaoMaterial): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, selecaoMaterial)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async excluir(id: number): Promise<string> {
		try {
			const responde: AxiosResponse<string> = await apiFetch.delete(``, {
				params: { id }
			});
			return responde.data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
}

export default new SelecaoMaterialClient();
