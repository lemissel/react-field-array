import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import fetchData from './api';

function MyForm() {
    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });

    useEffect(() => {
        fetchData("10511602000167").then(data => {
          data?.cnaes_secundarios?.forEach(items => {
            append(items);
          });
        });
      }, [append]);
    
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input
                        {...register(`items.${index}.descricao`)}
                        defaultValue={field.descricao}
                    />
                    <input
                        {...register(`items.${index}.codigo`)}
                        defaultValue={field.codigo}
                    />
                    <button type="button" onClick={() => remove(index)}>Remover</button>
                </div>
            ))}
            <button type="button" onClick={() => append({ descricao: '', codigo: 0 })}>Novo item</button>
            <button type="submit">Submit</button>
        </form>
    );
}
export default MyForm;