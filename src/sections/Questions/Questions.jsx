import Section from "@/layouts/Section";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup";
import Accordion from "@/components/Accordion";

const Questions = () => {
  const questionItems = [
    'What is YoruSpace?',
    'How much does YoruSpace cost?',
    'What content is available on YoruSpace?',
    'How can I watch YoruSpace?',
    'How do I sign up for YoruSpace?',
    'What is the YoruSpace free trial?',
    'How do I contact YoruSpace customer support?',
    'What are the YoruSpace payment methods?',
  ]

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about YoruSpace."
      actions={<Button label="Ask a Question" href="/yoru-space/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>YoruSpace is a streaming service that allows you to watch movies and shows on demand.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions