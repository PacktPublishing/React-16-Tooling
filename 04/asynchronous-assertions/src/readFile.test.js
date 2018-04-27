import fs from 'fs';
import readFile from './readFile';

jest.mock('fs');

describe('readFile', () => {
  it('calls fs.readFile', () => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb(false);
    });

    return readFile('file.txt').then(() => {
      expect(fs.readFile).toHaveBeenCalled();
    });
  });

  it('resolves a value', () => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb(false, 'test');
    });

    return expect(readFile('file.txt')).resolves.toBe('test');
  });

  it('rejects on error', () => {
    fs.readFile.mockReset();
    fs.readFile.mockImplementation((path, cb) => {
      cb('failed');
    });

    return expect(readFile()).rejects.toBe('failed');
  });
});
