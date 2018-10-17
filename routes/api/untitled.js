			<Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Date' placeholder='11/10/18' />
           <Form.Select fluid label='Type' options={options} placeholder='1040' />
          <Form.Input fluid label='Client' placeholder='Smith, John' />
         
        </Form.Group>
        <Form.Group inline>
          <label>Other:</label>
          <Form.Checkbox label='Eng Letter' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Checkbox label='8879' value='md' checked={value === 'md'} onChange={this.handleChange} />
          <Form.Checkbox label='e-filed' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea label='Memo' placeholder='Enter Details & Notes Here...' />
        
        <Form.Button>Submit</Form.Button>
      </Form>