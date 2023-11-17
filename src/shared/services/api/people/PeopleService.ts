import { Environment } from "../../../environment";
import { api } from "../axios-config";

export interface IListPerson {
  id: number;
  fullName: string;
  email: string;
  cityId: number;
}

export interface IDetailPerson {
  id: number;
  fullName: string;
  email: string;
  cityId: number;
}

type TPeopleTotalCount = {
  data: IListPerson[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPeopleTotalCount | Error> => {
  try {
    const urlRelative = `/people?_page=${page}&_limit=${Environment.LINES_LIMIT}&fullName_like=${filter}`;
    // console.log(urlRelative);
    const { data, headers } = await api.get(urlRelative);

    if (data) {
      return {
        data,
        totalCount: Number(headers["X-Total-Count"] || Environment.LINES_LIMIT),
      };
    }

    return new Error("Failed to list records");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Failed to list records"
    );
  }
};

const getById = async (id: number): Promise<IDetailPerson | Error> => {
  try {
    const urlRelative = `/people/${id}`;
    const { data } = await api.get(urlRelative);

    if (data) {
      return data;
    }

    return new Error("Failed to query the registry");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Failed to query the record."
    );
  }
};

const create = async (
  personData: Omit<IDetailPerson, "id">
): Promise<number | Error> => {
  try {
    const { data } = await api.post<IDetailPerson>("/people", personData);

    if (data) {
      return data.id;
    }

    return new Error("Failed to create a new record");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Failed to create a new record."
    );
  }
};

const updateById = async (
  id: number,
  personData: IDetailPerson
): Promise<void | Error> => {
  try {
    await api.put(`/people/${id}`, personData);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Failed to update the record."
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/people/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Failed to delete the record."
    );
  }
};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
