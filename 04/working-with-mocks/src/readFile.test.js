import fs from 'fs';
import readFile from './readFile';

jest.mock('fs');

describe('readFile', () => {
  it('calls fs.readFile', done => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb(false);
    });

    readFile('file.txt').then(() => {
      expect(fs.readFile).toHaveBeenCalled();
      done();
    });
  });

  it('resolves a value', done => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb(false, 'test');
    });

    readFile('file.txt').then(data => {
      expect(data).toBe('test');
      done();
    });
  });

  it('rejects on error', done => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb('failed');
    });

    readFile().catch(err => {
      expect(err).toBe('failed');
      done();
    });
  });
});
