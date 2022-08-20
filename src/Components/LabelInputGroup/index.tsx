import { Label } from '../../styles/typography';
import { InputField } from './styles';

import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';

import { FormDataSignup } from '../../Pages/Signup';
import { useParams } from 'react-router-dom';

interface LabelInputGroupProps {
  labelName: string;
  placehoder: string;
  nameField:
    | 'name'
    | 'email'
    | 'password'
    | 'passwordConfirmation'
    | 'bio'
    | 'contact'
    | 'course_module'
    | 'title'
    | 'status'
    | 'description'
    | 'deploy_url';
  defaultValue?: string;
  register: UseFormRegister<FormDataSignup>;
  errors: Partial<DeepMap<FormDataSignup, FieldError>>;
}

function LabelInputGroup({
  labelName,
  placehoder,
  defaultValue,
  nameField,
  errors,
  register,
}: LabelInputGroupProps) {
  const { tech_id } = useParams();

  return (
    <div>
      <Label htmlFor={labelName}>{labelName}</Label>
      <InputField
        error={!!errors[nameField]}
        type={
          labelName === 'Senha' || labelName === 'Confirmar Senha'
            ? 'password'
            : 'text'
        }
        id={labelName}
        label=""
        disabled={!!tech_id}
        placeholder={placehoder}
        helperText={errors[nameField]?.message}
        {...register(nameField, {
          value: defaultValue,
        })}
      />
    </div>
  );
}

export default LabelInputGroup;
