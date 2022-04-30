import Link from 'next/link'
import React, { useRef, useState } from 'react'
import PageHeader from '../../../components/Dashboard/PageHeader'
import DashLayout from '../../../components/Layout/DashLayout'
import Image from 'next/image'
import Select from 'react-select'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addProject } from '../../../redux/projects'
import { API_BASE } from '../../../utils/api'
import SEO from '../../../components/SEO'

const CreateProject = () => {
  const dispatch = useDispatch()

  const fileref = useRef()
  const tagsRef = useRef()
  const formRef = useRef()

  const [tags, setTags] = useState([])
  const [image, setImage] = useState()
  const [createState, setCreateState] =  useState('')

  const options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'ReactJs', label: 'ReactJs' },
    { value: 'NextJs', label: 'NextJs' },
    { value: 'NodeJs', label: 'NodeJs' },
    { value: 'TailwindCss', label: 'TailwindCss' },
  ]

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: '#3F3F46' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? 'black'
          : isSelected
          ? '#A9A9A9'
          : isFocused
          ? '#696969'
          : 'white',
        color: isDisabled
          ? 'black'
          : isSelected
          ? '#A9A9A9'
          : isFocused 
          ? 'white'
          : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : 'bg-zinc-700'
            : 'bg-zinc-700',
        },
      };
    },
    input: (styles) => ({ ...styles, backgroundColor: '#3F3F46', color: 'white'}),
    multiValue: (styles) => ({ ...styles, backgroundColor: '#C0C0C0', color: 'black'}),
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const projectData = {...data}

    if (!tags.length) {
      return alert('Select at-least one tag')
    }

    if (!fileref.current.files.length) {
      return alert('Select an image')
    }

    const imageData = new FormData()
    imageData.append('file', fileref.current.files[0])
    imageData.append('upload_preset', 'projects')
    
    setCreateState('Uploading..')
    const cloudinaryData = await fetch('https://api.cloudinary.com/v1_1/shahriyar-dev/image/upload', {
      method: 'POST',
      body: imageData
    }).then(data => data.json())

    projectData.tags = tags
    projectData.image = cloudinaryData.secure_url

    setCreateState('Saving..')
    const addData = await fetch(`${API_BASE}/projects/create`, {
      method: 'POST',
      body: JSON.stringify(projectData)
    }).then(data => data.json())

    if (addData.error) {
      alert(addData.error)
    } else {
      dispatch(addProject(addData))
      formRef.current?.reset()
      setImage(null)
      setCreateState('')
    }
  }

  const handleTagChange = (selectedOptions) => {
    setTags(selectedOptions)
  }

  const handleFileChange = () => {
    if (fileref.current.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(fileref.current.files[0]);

      reader.onload = () => setImage(reader.result);
    }
  }

  return (
    <DashLayout>
      <SEO title='➕ Create Project - Dashboard' />
      <PageHeader className='flex justify-between items-center'>
        Create Project
        <Link href='/dashboard/projects'>
          <a className='text-green-300 text-base'>Go back</a>
        </Link>
      </PageHeader>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className='grid grid-cols-3 gap-5'>
            <div>
              <label className='mb-2 block'>Title</label>
              <input type="text" defaultValue="" {...register('title')} className='bg-zinc-700 w-full rounded-md py-3' required/>
            </div>
            <div className='col-span-2'>
              <label className='mb-2 block'>Description</label>
              <input type="text" defaultValue="" {...register('description')} className='bg-zinc-700 w-full rounded-md py-3' required/>
            </div>

            <div>
              <label className='mb-2 block'>Tags</label>
              <Select ref={tagsRef} options={options} styles={colourStyles} onChange={handleTagChange} isMulti/>
            </div>

            <div className='col-span-2'>
              <label className='mb-2 block'>Url</label>
              <input type="text" defaultValue="" {...register('url')} className='bg-zinc-700 w-full rounded-md py-3'/>
            </div>

            <div>
              <label className='mb-2 block'>Image</label>
              <input type="file" ref={fileref} onChange={handleFileChange}/>
            </div>

            <div className='col-span-2 flex items-end justify-end'>
              <button type='submit' className='bg-green-400 text-black px-3 py-2 rounded-md cursor-pointer' disabled={createState !== ''}>
                {createState || 'Save'}
              </button>
            </div>
          </div>

          {image && (
            <div className='w-[500px] h-[300px] bg-black rounded-md my-5'>
              <Image src={image} className='rounded-md' width={500} height={300} layout='responsive' alt='cover' objectFit='cover'/>
            </div>
          )}
        </form>
      </div>
    </DashLayout>
  )
}

CreateProject.requireAuth = true

export default CreateProject