import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton,Edit, SimpleForm,TextInput,ReferenceInput,SelectInput,Create,SimpleList,} from 'react-admin';






export const PostList = props => (
    <List {...props}>
        <Datagrid>
        <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
                
                <TextField source="title" />
                <EditButton />
        </Datagrid>
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.views} views`}
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
        
    </List>
);
export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">              
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };
    
   

