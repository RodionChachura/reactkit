import type { NextPage } from "next"
import { Form } from "lib/ui/Form/Form"
import { TextInput } from "lib/ui/inputs/TextInput"
import { Controller, useForm } from "react-hook-form"
import { TextArea } from "lib/ui/inputs/TextArea"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { DemoPage } from "components/DemoPage"
import { Panel } from "lib/ui/Panel/Panel"
import { TitledSection } from "lib/ui/Layout/TitledSection"
import { AmountTextInput } from "lib/ui/inputs/AmountTextInput"
import { DollarIcon } from "lib/ui/icons/DollarIcon"
import { Button } from "lib/ui/buttons/Button"

interface FormShape {
  name: string
  bio: string
  salary: number
}

const bioMaxLength = 300

const schema = yup
  .object()
  .shape({
    name: yup.string().max(100).required(),
    bio: yup.string().max(bioMaxLength).required(),
    salary: yup.number().min(0).required(),
  })
  .required()

const TextInputPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormShape>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  })

  return (
    <DemoPage youtubeVideoId="V3scoHuQ19s" title="Text Input">
      <Panel width={400}>
        <TitledSection title="Who are You?">
          <Form
            content={
              <>
                <TextInput
                  label="Full name"
                  {...register("name")}
                  error={errors.name?.message}
                  autoFocus
                  placeholder="John Johnson"
                />
                <TextArea
                  rows={4}
                  maxLength={bioMaxLength}
                  label="Bio"
                  {...register("bio")}
                  error={errors.bio?.message}
                  placeholder="I'm a software engineer..."
                />
                <Controller
                  control={control}
                  name="salary"
                  render={({ field: { onChange, ...props } }) => (
                    <AmountTextInput
                      type="number"
                      error={errors.salary?.message}
                      label="Salary"
                      placeholder="Enter amount"
                      onValueChange={onChange}
                      unit={<DollarIcon />}
                      {...props}
                    />
                  )}
                />
              </>
            }
            onSubmit={handleSubmit(console.log)}
            actions={<Button size="l">Submit</Button>}
          />
        </TitledSection>
      </Panel>
    </DemoPage>
  )
}

export default TextInputPage
