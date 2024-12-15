import json
from Crypto.Hash import keccak

def hash_json_object(file_path):
    # Load JSON object from file
    with open(file_path, 'r') as f:
        json_object = json.load(f)
    
    # Convert JSON object to string
    json_str = json.dumps(json_object, sort_keys=True)
    
    # Compute keccak hash
    keccak_hash = keccak.new(digest_bits=256)
    keccak_hash.update(json_str.encode('utf-8'))
    
    # Print the hash
    print(keccak_hash.hexdigest())

if __name__ == '__main__':
    import sys
    if len(sys.argv) < 2:
        print('Usage: python3 %s <file_path>' % sys.argv[0])
    else:
        hash_json_object(sys.argv[1])
