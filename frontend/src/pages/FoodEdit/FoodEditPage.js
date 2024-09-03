import { useParams } from 'react-router-dom';
import classes from './foodEdit.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { add, getById, update } from '../../services/foodService';
import Title from '../../components/Title/Title';
import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { uploadImage } from '../../services/uploadService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function FoodEditPage() {
  const { foodId } = useParams();
  const [imageUrl, setImageUrl] = useState();
  const isEditMode = !!foodId;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) return;

    getById(foodId).then(food => {
      if (!food) return;
      reset(food);
      setImageUrl(food.imageUrl);
    });
  }, [foodId]);

  const submit = async foodData => {
    const food = { ...foodData, imageUrl };

    if (isEditMode) {
      await update(food);
      toast.success(`Food "${food.name}" updated successfully!`);
      return;
    }

    const newFood = await add(food);
    toast.success(`Food "${food.name}" added successfully!`);
    navigate('/admin/editFood/' + newFood.id, { replace: true });
  };

  const upload = async event => {
    setImageUrl(null);
    const imageUrl = await uploadImage(event);
    setImageUrl(imageUrl);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* <Title title={isEditMode ? 'Edit Food' : 'Add Food'} /> */}
        <h1>Agreement Form</h1>
        <form
          className={classes.form}
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <InputContainer label="Select Image">
            <input type="file" onChange={upload} accept="image/jpeg" />
          </InputContainer>

          {imageUrl && (
            <a href={imageUrl} className={classes.image_link} target="blank">
              <img src={imageUrl} alt="Uploaded" />
            </a>
          )}

          <Input
            type="text"
            label="Full Name"
            {...register('name', { required: true, minLength: 5 })}
            error={errors.name}
          />

          <Input
            type="number"
            label="Aadhar Number"
            {...register('price', { required: true })}
            error={errors.price}
          />
          <Input
            type="number"
            label="Phone Number"
            {...register('price', { required: true })}
            error={errors.price}
          />

          <Input
            type="text"
            label="Full Address"
            {...register('tags')}
            error={errors.tags}
          />
           <Input
            type="number"
            label="Farm Size(in acres)"
            {...register('price', { required: true })}
            error={errors.price}
          />
          <Input
            type="number"
            label="Quantity of Produce (in metric Tons)"
            {...register('price', { required: true })}
            error={errors.price}
          />
          <Input
            type="text"
            label="Crop Type"
            {...register('origins', { required: true })}
            error={errors.origins}
          />
          <Input
            type="number"
            label="Agreed MSP Rate(Per kg/ton)"
            {...register('price', { required: true })}
            error={errors.price}
          />
           <Input
            type="number"
            label="Quantity Covered Under MSP"
            {...register('price', { required: true })}
            error={errors.price}
          />
            <Input
            type="number"
            label="Bank Account Number"
            {...register('price', { required: true })}
            error={errors.price}
          />
           <Input
            type="text"
            label="Bank Name"
            {...register('origins', { required: true })}
            error={errors.origins}
          />
          <Input
            type="text"
            label="IFSC Code"
            {...register('origins', { required: true })}
            error={errors.origins}
          />
           <Input
            type="number"
            label="Bank Account Number"
            {...register('price', { required: true })}
            error={errors.price}
          />
         

          <Button type="submit" text={isEditMode ? 'Update' : 'Upload'} />
        </form>
      </div>
    </div>
  );
}
