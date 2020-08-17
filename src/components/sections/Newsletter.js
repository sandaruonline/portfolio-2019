import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Form, { FormSubmitted, Input, TextArea } from '../form/Form'
import VisibilitySensor from '../VisibilitySensor'
import Markdown from '../Markdown'

const NewsletterSection = ({ heading, body, submitted, onSubmit }) => {
  return (
    <section id="newsletter" className="flex justify-center items-center py-24">
      <div className="container mx-auto">
        <div className="flex justify-center items-center pb-24">
          <div className="w-full md:w-1/2 text-center">
            <VisibilitySensor className="text-center" direction="bottom" fade>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {heading}
              </h2>

              {body && <Markdown>{body.childMdx.body}</Markdown>}
            </VisibilitySensor>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <NewsletterForm submitted={submitted} onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  )
}

const NewsletterForm = ({ submitted, onSubmit }) => {
  if (submitted) {
    return (
      <FormSubmitted
        heading="Thanks for signing up!"
        body="I only send out newsletters with important updates, so I won't spam
          your inbox."
      />
    )
  }

  return (
    <Form
      className="w-full lg:w-3/4 mx-auto"
      onSubmit={onSubmit}
      name="newsletter"
      method="POST"
    >
      <div className="w-full flex flex-row flex-wrap justify-center lg:-mx-6">
        <div className="w-full lg:px-6 py-8 lg:py-0">
          <div className="flex flex-wrap items-end -mx-4 mb-2">
            <div className="flex-1 px-4">
              <Input label="First name" required />
            </div>
            <div className="flex-1 px-4">
              <Input label="Email" required />
            </div>
            <div className="flex-0 px-4">
              <div className="mt-6 mb-3">
                <button type="submit" className="btn btn-base btn-icon">
                  <span>Sign Up</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default NewsletterSection
