import fs from 'fs';
import writeFile from './writeFile';

jest.mock('fs');

describe('writeFile', () => {
  it('calls fs.writeFile', () => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb(false);
    });

    return writeFile('file.txt').then(() => {
      expect(fs.writeFile).toHaveBeenCalled();
    });
  });

  it('resolves without a value', () => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb(false, 'test');
    });

    return expect(
      writeFile('file.txt', test)
    ).resolves.toBeUndefined();
  });

  it('rejects on error', () => {
    fs.writeFile.mockReset();
    fs.writeFile.mockImplementation((path, data, cb) => {
      cb('failed');
    });

    return expect(writeFile()).rejects.toBe('failed');
  });
});
