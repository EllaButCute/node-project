import test from 'ava';
import {capitalise} from '../app/utils';

test('capitalise a string',(t) => {
    t.is(capitalise("this is a string"), "THIS IS A STRING");
    t.is(capitalise("this is a cheeky string"), "THIS IS A STRING");
})