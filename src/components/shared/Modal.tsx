import React, { Fragment } from "react"

import { Dialog, Transition } from "@headlessui/react"
import { BiLoaderAlt } from "react-icons/bi"

type Props = {
  title: string
  subtitle: string
  description: string
  open: boolean
  onClose: () => void
  onConfirm: () => void
  buttonText: string
  isLoading: boolean
}

const Modal = ({
  title,
  subtitle,
  description,
  open,
  onClose,
  onConfirm,
  buttonText,
  isLoading,
}: Props) => {
  return (
    <Transition appear show={Boolean(open)} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-montserrat"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-200 flex items-center gap-2"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Description className="text-red-400 text-xs">
                  {subtitle}
                </Dialog.Description>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">{description}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 justify-center rounded-md border border-transparent bg-zinc-600 px-4 py-2 text-sm font-medium text-whiite hover:bg-zinc-500 focus:outline-none focus-visible:ring-2"
                    onClick={onConfirm}
                  >
                    {isLoading && <BiLoaderAlt className="animate-spin" />}
                    {buttonText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
