/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from "./../axios/axios";
import { AxiosResponse } from "axios";
import { Material } from "./../model/MaterialModel";

class MaterialClient {
  public async findById(id: number): Promise<Material> {
    try {
      return (await apiFetch.get<Material>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAll(): Promise<Material[]> {
    try {
      return (await apiFetch.get<Material[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findAtivo(): Promise<Material[]> {
    try {
      return (await apiFetch.get<Material[]>(`/ativo`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(material: Material): Promise<string> {
    try {
      return (await apiFetch.post<string>(``, material)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(id: number, material: Material): Promise<string> {
    try {
      return (await apiFetch.put<string>(`/${id}`, material)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async excluir(id: number): Promise<string> {
    try {
      const responde: AxiosResponse<string> = await apiFetch.delete(``, {
        params: { id },
      });
      return responde.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new MaterialClient();
